<html>
    <head>
        <style>
            table,th, td{
                border: 1px solid black;
            }
        </style>
    </head>
    <body>

        <h4>URL Procesada: <?php echo $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?> </h4>


        <h4>Información sobre REQUEST</h4>
        <table>
            <tr>
                <th>Scheme</th>
            </tr>
            <tr>
                <td>Method</td>
                <td> <?php echo $_SERVER['REQUEST_METHOD'] ?></td>
            </tr>
            <tr>
                <td>URI</td>
                <td><?php echo $_SERVER['REQUEST_URI']  ?></td>
            </tr>
        </table>
        
        <h4>Parámetros del REQUEST<?php
            if(!isset($_SERVER['argc'])){
                echo "(0)";
            }else{
                echo $_SERVER['argc'];
            }
        ?></h4>


        <h4>HEADERS del REQUEST</h4>
        <table>
            <tr>
                <th>Accept</th>
                <th> <?php echo $_SERVER['HTTP_ACCEPT'] ?></th>
            </tr>
            <tr>
                <td>Cache-Control</td>
                <td> <?php echo $_SERVER['REMOTE_HOST'] ?></td>
            </tr>
            <tr>
                <td>Upgrade-Insecure-Requests</td>
                <td><?php echo $_SERVER['HTTP_UPGRADE_INSECURE_REQUEST']  ?></td>
            </tr>
            <tr>
                <td>User-Agent</td>
                <td><?php echo $_SERVER['HTTP_USER_AGENT']  ?></td>
            </tr>
            <tr>
                <td>Accept-Language</td>
                <td><?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE']  ?></td>
            </tr>
            <tr>
                <td>Connection</td>
                <td><?php echo $_SERVER['HTTP_CONNECTION']  ?></td>
            </tr>
            <tr>
                <td>Host</td>
                <td><?php echo $_SERVER['HTTP_HOST']  ?></td>
            </tr>
            <tr>
                <td>Accept-Encoding</td>
                <td><?php echo $_SERVER['HTTP_ACCEPT_ENCODING']  ?></td>
            </tr>
        </table>

        <h4>Información sobre el SERVER</h4>
        <table>
            <tr>
                <th>Name</th>
                <th>localhost</th>
            </tr>
            <tr>
                <td>Address</td>
                <td> <?php echo $_SERVER['SERVER_ADDR'] ?></td>
            </tr>
            <tr>
                <td>Port</td>
                <td><?php echo $_SERVER['SERVER_PORT']  ?></td>
            </tr>
            <tr>
                <td>Protocol</td>
                <td><?php echo $_SERVER['SERVER_PROTOCOL']  ?></td>
            </tr>
            <tr>
                <td>DocumentRoot</td>
                <td><?php echo $_SERVER['DOCUMENT_ROOT']  ?></td>
            </tr>
            <tr>
                <td>Software</td>
                <td><?php echo $_SERVER['SERVER_SOFTWARE']  ?></td>
            </tr>
            <tr>
                <td>Gateway Interface</td>
                <td><?php echo $_SERVER['GATEWAY_INTERFACE']  ?></td>
            </tr>
        </table>
        <h4>Información sobre el SCRIPT</h4>
        <table>
            <tr>
                <th>Name</th>
                <th><?php echo $_SERVER['PHP_SELF']  ?></th>
            </tr>
            <tr>
                <td>Filename</td>
                <td> <?php echo $_SERVER['SCRIPT_FILENAME'] ?></td>
            </tr>
            <tr>
                <td>PHP-SELF</td>
                <td><?php echo $_SERVER['PHP_SELF']  ?></td>
            </tr>
        </table>

    </body>
</html>





