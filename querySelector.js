<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Zebra</title>
        <style>
            .zebraon{background:silver}
        </style>
        <script type="text/javascript">
            window.onload=function(){
                var zebrar=document.querySelectorAll('.zebra tbody tr');
                for(var i=0;i<zebrar.length;i+=2)
                    zebrar[i].className='zebraon';
                
                
                el = document.querySelector('.zebra tbody tr');
            }
        </script>
    </head>
    <body>
        <table class="zebra">
            <thead>
                <tr>
                    <th>Vendedor</th> <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Manoel</td> <td>12.300,00</td>
                </tr>
                <tr>
                    <td>Joaquim</td> <td>21.300,00</td>
                </tr>
                <tr>
                    <td>Maria</td> <td>13.200,00</td>
                </tr>
                <tr>
                    <td>Marta</td> <td>32.100,00</td>
                </tr>
                <tr>
                    <td>Antonio</td> <td>23.100,00</td>
                </tr>
                <tr>
                    <td>Pedro</td> <td>31.200,00</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
