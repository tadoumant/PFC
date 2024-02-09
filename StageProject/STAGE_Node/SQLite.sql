
-- Table Contact
    -- db.run("CREATE TABLE IF NOT EXISTS contact (id TEXT PRIMARY KEY , full_Name TEXT NOT NULL, identifiant TEXT NOT NULL , regionsRoyaume_Name TEXT NOT NULL ,messagesCon TEXT NOT NULL ,IP TEXT NOT NULL)",function(err) {
    --     if (err) {
    --        console.error(err.message);
    --     } else {
    --        console.log("Record inserted successfully");
    --     }
    -- });
        

       

    

    // Create the Statistique_Reclamations table
        // db.run(`CREATE TABLE IF NOT EXISTS Statistique_Reclamations (
        //     numerReclmationDeposer INTEGER,
        //     numberReclmationTraiter INTEGER,
        //     numberRelmationParRegion INTEGER,
        //     numberReclmationParJour INTEGER,
        //     PRIMARY KEY (numerReclmationDeposer, numberReclmationTraiter),
        //     FOREIGN KEY (numerReclmationDeposer) REFERENCES Reclamations(ID_Reclamation),
        //     FOREIGN KEY (numberReclmationTraiter) REFERENCES Reclamations(ID_Reclamation)
        // )`);

    // Create the Traiter_Reclamations table 
        // db.run(`CREATE TABLE IF NOT EXISTS Traiter_Reclamations (
        //     ID_User INTEGER,
        //     ID_Reclamation INTEGER,
        //     TypeSolution TEXT,
        //     messagesSolution TEXT,
        //     DateTraiterSoulition TEXT,
        //     PRIMARY KEY (ID_User, ID_Reclamation),
        //     FOREIGN KEY (ID_User) REFERENCES Users(ID_User),
        //     FOREIGN KEY (ID_Reclamation) REFERENCES Reclamations(ID_Reclamation)
        // )`);

    





-- // Contact Table
--     // sql= `CREATE TABLE IF NOT EXISTS Contact (
--     //     numberContact INTEGER PRIMARY KEY AUTOINCREMENT ,
--     //     name TEXT,
--     //     Identify TEXT,
--     //     nameRegions TEXT,
--     //     messages TEXT,
--     //     ip_address TEXT)`;
--     // db.run(sql);

-- // Create the Users table
--         sql=`CREATE TABLE IF NOT EXISTS Users (
--             ID_User INTEGER PRIMARY KEY AUTOINCREMENT,
--             numberCompte TEXT,
--             password TEXT,
--             nameRegionsCompte TEXT,
--             typeCompte TEXT,
--             activation TEXT,
--             statusCompte TEXT,
--             ipAdress TEXT,
--             DateCreate DATE,
--             dateLastVisite DATE
--         )`
--      db.run(sql);    
-- // Create the Reclamations table
--         // db.run(`CREATE TABLE IF NOT EXISTS Reclamations (
--         //     ID_User INTEGER,
--         //     ID_Reclamation INTEGER PRIMARY KEY AUTOINCREMENT,
--         //     typeProblem TEXT,
--         //     detailsProblem TEXT,
--         //     messagesProblem TEXT,
--         //     filesProblem TEXT,
--         //     dateDeposerReclamation TEXT,
--         //     FOREIGN KEY (ID_User) REFERENCES Users(ID_User)
--         // )`);    

--  // Create the Block_IP_Adress table
--         // db.run(`CREATE TABLE IF NOT EXISTS Block_IP_Adress (
--         //     IPadressBlock TEXT PRIMARY KEY
--         // )`); 
-- // Create the Technicien table
--         // db.run(`CREATE TABLE IF NOT EXISTS Technicien (
--         //     ID_Technicien INTEGER PRIMARY KEY AUTOINCREMENT,
--         //     statusTechnicien TEXT,
--         //     nameTechnicien TEXT
--         // )`);