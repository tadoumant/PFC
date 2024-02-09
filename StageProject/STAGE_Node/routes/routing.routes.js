const router=require('express').Router();
const session = require('express-session');
const crypto = require('crypto');
const os = require('os');
const sqlite3 = require('sqlite3').verbose();


// Functions
    // RandomID
        function generateRandomId(length) {
        const bytes = crypto.randomBytes(Math.ceil(length / 2));
        const id = bytes.toString('hex').slice(0, length);
        return id;
        }
        const randomId = generateRandomId(8); 
    // Date 
        function getCurrentDateTime() {
            const now = new Date();
            
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const year = now.getFullYear();
            
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
            return formattedDateTime;
        }
    // GET IP
        const networkInterfaces = os.networkInterfaces();
        const addresses = [];
        Object.keys(networkInterfaces).forEach((interfaceName) => {
        const interfaces = networkInterfaces[interfaceName];
        interfaces.forEach((iface) => {
            if (iface.family === 'IPv4' && !iface.internal) {
            addresses.push(iface.address);
            }
        });
        });
    // Connect DB
        const db= new sqlite3.Database('db.sqlite',sqlite3.OPEN_READWRITE,(err)=>{
            if(err) return console.error(err.message);
            console.log('Connection Successfuly DB');
        })

// GET
    router.get('/CREATE_DB',(req,res)=>{
        sql1= `CREATE TABLE IF NOT EXISTS Contact (numberContact INTEGER PRIMARY KEY AUTOINCREMENT ,name TEXT,Identify TEXT,nameRegions TEXT,messages TEXT,ip_address TEXT)`;
        db.run(sql1);
        db.run(`CREATE TABLE IF NOT EXISTS Technicien (
            ID_Technicien INTEGER PRIMARY KEY AUTOINCREMENT,
            statusTechnicien TEXT,
            nameRegionsTech TEXT,
            nameTechnicien TEXT
        )`);
        sql2=`CREATE TABLE IF NOT EXISTS Users (
            ID_User INTEGER PRIMARY KEY AUTOINCREMENT,
            numberCompte TEXT,
            password TEXT,
            nameRegionsCompte TEXT,
            typeCompte TEXT,
            activation TEXT,
            statusCompte TEXT,
            ipAdress TEXT,
            DateCreate DATE,
            dateLastVisite DATE
        )`
        db.run(sql2);   
        db.run(`CREATE TABLE IF NOT EXISTS Reclamations (
            ID_User INTEGER,
            ID_Reclamation INTEGER PRIMARY KEY AUTOINCREMENT,
            typeProblem TEXT,
            detailsProblem TEXT,
            messagesProblem TEXT,
            dateDeposerReclamation DATE,
            FOREIGN KEY (ID_User) REFERENCES Users(ID_User)
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS Block_IP_Adress (
            IPadressBlock TEXT PRIMARY KEY
        )`); 
        
        db.run(`CREATE TABLE IF NOT EXISTS Statistique_Reclamations (
            numerReclmationDeposer INTEGER,
            numberReclmationTraiter INTEGER,
            numberRelmationParRegion INTEGER,
            IDRegion TEXT,
            numberReclmationParJour INTEGER,
            PRIMARY KEY (numerReclmationDeposer, numberReclmationTraiter),
            FOREIGN KEY (numerReclmationDeposer) REFERENCES Reclamations(ID_Reclamation),
            FOREIGN KEY (numberReclmationTraiter) REFERENCES Reclamations(ID_Reclamation)
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS Traiter_Reclamations (
            ID_User INTEGER,
            ID_Reclamation INTEGER,
            TypeSolution TEXT,
            messagesSolution TEXT,
            DateTraiterSoulition TEXT,
            PRIMARY KEY (ID_User, ID_Reclamation),
            FOREIGN KEY (ID_User) REFERENCES Users(ID_User),
            FOREIGN KEY (ID_Reclamation) REFERENCES Reclamations(ID_Reclamation)
        )`);
        res.redirect('Accueil');
    });

    router.get('/DELET_TABLE',(req,res)=>{
        // Drop the table
        const tableName = 'Reclamations';
        const dropTableQuery = `DROP TABLE IF EXISTS ${tableName};`;
        db.run(dropTableQuery, (err) => {
            if (err) {
                console.error('Error dropping table:', err.message);
            } else {
                console.log(`Table '${tableName}' dropped successfully.`);
            }
        });
    });
    // ---------------------------------------------
    router.get('/',(req,res)=>{
        res.render('Accueil')

    })
    router.get('/Accueil',(req,res)=>{
        res.render('Accueil')
    })
    router.get('/Contact',(req,res)=>{
        res.render('Contact')
    })
    router.get('/ContactSned',(req,res)=>{
        res.render('ContactSned')
    })
    router.get('/Login',(req,res)=>{
        res.render('Login')
    })
    router.get('/addUser',(req,res)=>{
        res.render('addUser')
    })
    router.get('/LoginError',(req,res)=>{
        res.render('LoginErr')
    })
    router.get('/MotDePasswOb',(req,res)=>{
        res.render('MotDePasswOb')
    })
    // Agent
    router.get('/Agent/',(req,res)=>{

        db.all('SELECT * FROM Reclamations  JOIN  Traiter_Reclamations ON Reclamations.ID_User = Traiter_Reclamations.ID_User  WHERE Reclamations.ID_User = ?',[req.session.userId], (err, rows) => {
            if (err) {
              console.error('Error querying the database:', err.message);
              res.status(500).send('Internal Server Error');
            } else {
              res.render('Agent/AgentHome', { data: rows ,userId:req.session.userId});
            }
        });
      











    })
    router.get('/Agent/Envoyer',(req,res)=>{
        res.render('Agent/AgentEnv')
    })
    router.get('/Agent/Resolues',(req,res)=>{
        res.render('Agent/AgentResou')
    })
    // Administrateur
    router.get('/Administrateur/',(req,res)=>{
        res.render('Administrateur/AdminHome')
    })
    router.get('/Administrateur/AdminShowr',(req,res)=>{
        db.all('SELECT * FROM Reclamations ', (err, rows) => {
            if (err) {
              console.error('Error querying the database:', err.message);
              res.status(500).send('Internal Server Error');
            } else {
                db.all('SELECT * FROM Technicien ', (err, rows2) => {
                    if (err) {
                      console.error('Error querying the database:', err.message);
                      res.status(500).send('Internal Server Error');
                    } else {
                      res.render('Administrateur/AdminShowr', { data: rows ,data2: rows2});
                    }
                  });
            }
          });
    })
    router.get('/Administrateur/AdminGeAcount',(req,res)=>{
        db.all('SELECT * FROM Users', (err, rows) => {
            if (err) {
              console.error('Error querying the database:', err.message);
              res.status(500).send('Internal Server Error');
            } else {
              res.render('Administrateur/AdminGeAcount', { data: rows });
            }
          });
    })
    router.get('/Administrateur/AdminGeContact',(req,res)=>{
        db.all('SELECT * FROM Contact', (err, rows) => {
            if (err) {
              console.error('Error querying the database:', err.message);
              res.status(500).send('Internal Server Error');
            } else {
              res.render('Administrateur/AdminGeContact', { data: rows });
            }
          });
        // res.render()


    })

// POST
    router.post('/ContactSned',(req,res)=>{
        const { name, identifiant, regionsRoyaumeMar, messages } = req.body;      
        const sqlContact = 'INSERT INTO Contact ( name, Identify, nameRegions , messages ,ip_address) VALUES ( ?, ?, ?, ?, ?)';
        const paramsContact = [ name, identifiant ,regionsRoyaumeMar, messages, addresses[0]];
        db.run(sqlContact, paramsContact, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
        res.redirect('/ContactSned');
    })
    router.post('/addUser',(req,res)=>{
        const { numberCompte, password, nameRegionsCompte, typeCompte ,activation ,statusCompte } = req.body;      
        const sqlUserrs = 'INSERT INTO Users ( numberCompte, password, nameRegionsCompte , typeCompte ,activation,statusCompte,ipAdress,DateCreate,dateLastVisite) VALUES ( ?, ?, ?, ?, ?,?,?,?,?)';
        const paramsUserrs = [ numberCompte, password ,nameRegionsCompte, typeCompte,activation,statusCompte, addresses[0],getCurrentDateTime(),getCurrentDateTime()];
        db.run(sqlUserrs, paramsUserrs, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
        res.redirect('/addUser');
    });
    router.post('/AgentEnv',(req,res)=>{
        const { Problème, ch, probelmEx} = req.body;   
        const chArry = Array.isArray(ch) ? ch : [ch];
        if (req.session.userId) {
            const sqlUserrs = 'INSERT INTO Reclamations ( ID_User, typeProblem,detailsProblem,messagesProblem,dateDeposerReclamation ) VALUES ( ?, ?, ? ,?, ?)';
            const paramsUserrs = [req.session.userId, Problème, chArry.join(', ') ,probelmEx,getCurrentDateTime()];
            db.run(sqlUserrs, paramsUserrs, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
        
            db.all('SELECT * FROM Statistique_Reclamations ', (err, rows) => {
                if (err) {
                  console.error('Error querying the database:', err.message);
                  res.status(500).send('Internal Server Error');
                } else {
                    let numerReclmationDepose = rows.numerReclmationDeposer;
                    let numberReclmationTraiter = rows.numberReclmationTraiter;
                    let numberRelmationParRegion = rows.numberRelmationParRegion + 1;
                    let IDRegion = req.session.userId;
                    let numberReclmationParJour = rows.numberReclmationParJour + 1;
                    let NewnumerReclmationDeposer = numerReclmationDepose + 1;
                    // console.log(numerReclmationDepose);
                    // console.log(numberReclmationTraiter);
                    // console.log(numberRelmationParRegion);
                    // console.log(IDRegion);
                    // console.log(numberReclmationParJour);
                    // console.log(NewnumerReclmationDeposer);

                    // res.redirect('/Agent/');
                }
              });
        } else { res.redirect('/Agent/Envoyer');}
    });
    router.get('/addTech',(req,res)=>{
        const dataToInsert = [
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Tanger-Tétouan-Al Hoceima', nameTechnicien: 'Tech Adnan' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Tanger-Tétouan-Al Hoceima', nameTechnicien: 'Tech Amire' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'l\'est', nameTechnicien: 'Tech khalid' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'l\'est', nameTechnicien: 'Tech hassan' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Fès-Meknès', nameTechnicien: 'Tech abdrahamn' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Fès-Meknès', nameTechnicien: 'Tech mehdi' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Rabat-Salé-Kenitra', nameTechnicien: 'Tech noureddine' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Rabat-Salé-Kenitra', nameTechnicien: 'Tech yassine' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Beni Mellal-Khenifra', nameTechnicien: 'Tech khadija' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Beni Mellal-Khenifra', nameTechnicien: 'Tech hassna' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Casablanca-Settat', nameTechnicien: 'Tech amina' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Casablanca-Settat', nameTechnicien: 'Tech lojin' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Marrakech-Safi', nameTechnicien: 'Tech akille' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Marrakech-Safi', nameTechnicien: 'Tech bilal' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Draa-Tafilalet', nameTechnicien: 'Tech amine' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Draa-Tafilalet', nameTechnicien: 'Tech saad' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Souss-Massa', nameTechnicien: 'Tech ilyass' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Souss-Massa', nameTechnicien: 'Tech simo' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Guelmim Oued Nom', nameTechnicien: 'Tech franky' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Guelmim Oued Nom', nameTechnicien: 'Tech lodegi' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Laâyoune Sakia El Hamra', nameTechnicien: 'Tech marwanne' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Laâyoune Sakia El Hamra', nameTechnicien: 'Tech awatif' },
            { statusTechnicien: 'hors ligne', nameRegionsTech: 'Dakhla-Oued Ed-Dahab', nameTechnicien: 'Tech montacir' },
            { statusTechnicien: 'en ligne', nameRegionsTech: 'Dakhla-Oued Ed-Dahab', nameTechnicien: 'Tech lamiae' }
          ];
            const insertQuery = `INSERT INTO Technicien (statusTechnicien, nameRegionsTech, nameTechnicien) VALUES (?, ?, ?)`;
            const stmt = db.prepare(insertQuery);
            dataToInsert.forEach((data) => {
                stmt.run(data.statusTechnicien, data.nameRegionsTech, data.nameTechnicien);
            });
            stmt.finalize((err) => {
                if (err) {
                  console.error('Error finalizing the statement:', err.message);
                } else {
                  console.log('Data inserted successfully.');
                }
              
                // Close the database connection after executing the queries
                db.close((closeErr) => {
                  if (closeErr) {
                    console.error('Error closing the database:', closeErr.message);
                  } else {
                    console.log('Database connection closed.');
                  }
                });
            });

        // const sqlTech = 'INSERT INTO Technicien ( statusTechnicien, nameTechnicien) VALUES ( ?, ? )';
        // const paramsTech = ['hors ligne','Technicien hanane'];
        // db.run(sqlTech, paramsTech, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
        res.redirect('Accueil');
    });
    router.post('/verification',(req,res)=>{
        const { numberCompte, password } = req.body;
        db.get(
            'SELECT * FROM Users WHERE numberCompte = ? AND password = ?',
            [numberCompte, password],
            (err, row) => {
              if (err) {
                res.render('Login', { mssg: 'les informations d\'identification invalides' });
              }else if (row) {
                if(row.activation === 'Active'){
                    req.session.userId = numberCompte;
                    const query = 'UPDATE Users SET statusCompte = ? WHERE numberCompte = ?';
                    const values = ['En ligne', numberCompte];
                    db.run(query, values, (err) => {});
                    if(row.typeCompte === 'Agent'){
                        res.redirect('/Agent/');
                    }else if(row.typeCompte === "Admin"){
                        res.redirect('/Administrateur/');
                    }
                }else if(row.activation === 'désactivé'){
                    res.render('Login', { mssg: 'les informations d\'identification invalides' });
                } 
              } else {
                res.render('Login', { mssg: 'les informations d\'identification invalides' });
              }
            }
          );
    });
    router.get('/logout', (req, res) => {
        // Check if the user is logged in
        req.session.destroy((err) => {
            if (err) {
              console.error('Error destroying session:', err.message);
              res.status(500).json({ error: 'Internal server error' });
            } else {
            res.render('Login', { mssg: 'Deconnexion' });
            }
          });
        // if (req.headers.authorization) {
        //   const userId = parseInt(req.headers.authorization);
        //   const index = loggedInUsers.indexOf(userId);
        //   if (index !== -1) {
        //     loggedInUsers.splice(index, 1); // Remove the logged-in user ID from the array
        //   }
        // }
        // res.render('Login', { mssg: 'Deconnexion' });
    });
    router.post('/deactivate', (req, res) => {
        const { id } = req.body;
        const query = 'UPDATE Users SET activation = ? WHERE numberCompte = ?';
        const values = ['désactivé', id];
         db.run(query, values, (err) => {
            if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Failed to deactivate account.' });
            } else {
            res.json({ message: 'Account deactivated successfully.' });
            }
        });
    });
    router.post('/activate', (req, res) => {
        const { id } = req.body;
        const query = 'UPDATE Users SET activation = ? WHERE numberCompte = ?';
        const values = ['Active', id];
      
         db.run(query, values, (err) => {
            if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Failed to deactivate account.' });
            } else {
            res.json({ message: 'Account deactivated successfully.' });
            }
        });
    });
    router.get('/protected', (req, res) => {
        if (req.session.userId) {
          res.json({ message: 'You are logged in and authorized to access this route.' });
        } else {
          res.status(401).json({ error: 'Unauthorized. Please log in first.' });
        }
    });
    // Traiter
    router.post('/RecResolution',(req, res)=>{
      const { idRec,idUs,messgesSolution } = req.body;
      const sqlRecRejet = 'INSERT INTO Traiter_Reclamations ( ID_User, ID_Reclamation, TypeSolution , messagesSolution ,DateTraiterSoulition) VALUES ( ?, ?, ?, ?, ?)';
      const paramsRecRejet = [ idUs, idRec ,'Resolution', messgesSolution,getCurrentDateTime() ];
      db.run(sqlRecRejet, paramsRecRejet, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});

    // const sqlUpdateAll = `UPDATE Reclamations SET statuusRec = ? WHERE ID_User= ?`;
    // db.run(sqlUpdateAll, ['RecTrt',idUs], function (err) {
    //             if (err) {
    //               console.error('Error updating data:', err.message);
    //             } else {
    //               console.log('All rows updated successfully.');
    //             }
    //           });


    });
    router.post('/RecRejet',(req, res)=>{
      const { idRec,idUs } = req.body;
      const sqlRecRejet = 'INSERT INTO Traiter_Reclamations ( ID_User, ID_Reclamation, TypeSolution , messagesSolution ,DateTraiterSoulition) VALUES ( ?, ?, ?, ?, ?)';
      const paramsRecRejet = [ idUs, idRec ,'Reject', 'pandding',getCurrentDateTime() ];
      db.run(sqlRecRejet, paramsRecRejet, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
    });
    router.post('/RecDTechnicien',(req, res)=>{
      const { idRec,idUs } = req.body;
      const sqlRecRecDTechnicien = 'INSERT INTO Traiter_Reclamations ( ID_User, ID_Reclamation, TypeSolution , messagesSolution ,DateTraiterSoulition) VALUES ( ?, ?, ?, ?, ?)';
      const paramsRecDTechnicien = [ idUs, idRec ,'Envoyer Techn', 'pandding',getCurrentDateTime() ];
      db.run(sqlRecRecDTechnicien, paramsRecDTechnicien, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
    });
    router.post('/RecDC',(req, res)=>{
      const { idRec,idUs } = req.body;
      const sqlRecDC = 'INSERT INTO Traiter_Reclamations ( ID_User, ID_Reclamation, TypeSolution , messagesSolution ,DateTraiterSoulition) VALUES ( ?, ?, ?, ?, ?)';
      const paramsRecDC = [ idUs, idRec ,'Reclm DC', 'Interdire',getCurrentDateTime() ];
      db.run(sqlRecDC, paramsRecDC, function(err) {if (err) {console.error('Error inserting data:', err.message);} else {console.log('Data inserted with ID:', this.lastID);}});
    });
      
// db.close();
module.exports=router;
