const http = require('http');

const aboutPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<a href="/">Home<a/> 
    <h1> Dimo's ph Num +359 88 9 670187<h1>
</body>
</html>`;

const server = http.createServer(((req, res) => {
    console.log('Request resived');
    if (req.url == '/') {
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <a href="/about">About<a/> 
            <h1> Здравей, Димо!<h1>
            <h1> Здравей, Димо!<h1>
        </body>
        </html>`);
        res.end()
    } else if (req.url == '/about') {
        res.write(aboutPage)
        res.end();
}else {
    res.statusCode = 404;
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <a href="/about">About<a/> 
        <h1> 404! Страницата се счупи!<h1>
        <h1> Упс!<h1>
    </body>
    </html>`)
    res.end()
}
}));

server.listen(3000)