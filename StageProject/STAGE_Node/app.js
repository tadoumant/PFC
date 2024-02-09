// Requires
const express   =require('express');
const session = require('express-session');

const path      = require('path');
const routing   = require('./routes/routing.routes')
const app       =express();
const port      =1000;
const os = require('os');




app.use(express.static(path.join(__dirname,'assets')));
app.use(express.static(path.join(__dirname,'images')));
app.set('view engine','ejs');
app.set('views','views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const blockedIP = '172.20.10.4';
// const blockedIPRegex = /^172\.20\.10\.(?:([4-9][0-9]?)|100)$/; // 172.20.10.0 -> 172.20.10.100

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

app.use((req, res,next) => {
    // if (blockedIPRegex.test(addresses[0])) {
    if (addresses[0] === blockedIP) {
      res.status(403).send('Accès interdit.');
    } else {
        app.use('/',routing);
    }
    next();
});
app.use(session({
    secret: 'dean',
    resave: false,
    saveUninitialized: true
}));


app.listen(port,()=>console.log('Port is '+port+' | Server is Running .. '));
