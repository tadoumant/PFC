<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel de bord</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../style2.css">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://kit.fontawesome.com/0c6c59d6fe.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .body30001{
            gap:20px;
        }
        .body30001_details0{
            /* border: 1px solid #ccc; */
            background-image: url('../images/headerbg.png');
            box-shadow: 0px 0 5px -2px black;
            background-size: cover;
            cursor: pointer;
            transition: all .3s ease-out;
        }
        .body30001_details0:hover{
            transform: scale(1.1);
        }
        .body30001_details000:hover{
            transform: scale(1)
        }
        .body30001_details0 a:hover{
            cursor: pointer;
            background-color: rgb(21, 172, 21);

        }
        .app2AFF0101{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            padding: 30px;
            justify-content: center;
        }
        .app2AFF0101box{
            width: 500px;
            height: 400px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
        .app2AFF0101box11{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          
        }
    </style>
</head>
<body>
    <header>
        <div class="header01">
            <img src="../images/logo.svg" alt="" srcset="" width="65px">
            <nav>
                <div class="navLink01">
                    <a href="./tabledebord.html" class="ac">TABLE DE BORD</a>
                    <a href="./showrecl.html" >AFFICHIER  REC</a>
                </div>
                <a href="./login.html" class="seConnectBTN" style="background-color: #068843;">SE DECONNECTER</a>
            </nav>
        </div>
        <div class="header02">
            <img src="../images/logo.svg" alt="" srcset="" width="65px">
            <i class="uil uil-bars"></i>
            <i class="uil uil-times"></i>
            <nav>
                <a href="./tabledebord.html" class="ac">TABLE DE BORD</a>
                <a href="./showrecl.html" >AFFICHIER  REC</a>
                <a href="./login.html" class="seConnectBTN" style="background-color: #068843;">SE DECONNECTER</a>
            </nav>
        </div>
    </header>
    <!--  -->
    <section class="app2AFF">
        <div class="body30001">
            <div class="body30001_details0 ">
                <i class="uil uil-file"></i>
                <div class="body30001_details00">
                    <span class="numberDe">0</span>
                    <p>Réclamations déposées</p>
                </div>
            </div>
            <div class="body30001_details0 body30001_details" >
                <i class="uil uil-check-square"></i>
                <div class="body30001_details00">
                    <span class="numberDe">0</span>
                    <p>Réclamations traitées</p>
                </div>
            </div>
            <div class="body30001_details0 body30001_details000">
                <i class="uil uil-chart-bar"></i>
                <a href="statistiques.php">Toutes les statistiques</a>
            </div>
        </div>  
        <div class="app2AFF0101">
            <div class="app2AFF0101box app2AFF0101box11">
            <canvas id="reclamationChart2"></canvas>

            </div>
            <div class="app2AFF0101box app2AFF0101box11">
                <canvas id="reclamationChart"></canvas>

            </div>
        </div>

    </section>
    <script src="../js.js"></script>
    <script src="../js2.js"></script>
    <!-- CHART -->
    <script>
      <?php
        $reclamationData = [
          ['day' => '23-06-01', 'count' => 1],
          ['day' => '23-06-02', 'count' => 2],
          ['day' => '23-06-03', 'count' => 3],
          ['day' => '23-06-03', 'count' => 0],
          ['day' => '23-06-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-05-03', 'count' => 0],
          ['day' => '23-06-03', 'count' => 0],
          ['day' => '23-07-03', 'count' => 0],
          ['day' => '23-07-03', 'count' => 0],
          ['day' => '23-07-03', 'count' => 0],
          ['day' => '23-07-04', 'count' => 0],
          ['day' => '23-07-05', 'count' => 4],
          ['day' => '23-07-06', 'count' => 6],
          ['day' => '23-06-07', 'count' => 0],
          ['day' => '23-06-08', 'count' => 11],
          ['day' => '23-06-08', 'count' => 30],
          ['day' => '23-06-09', 'count' => 10]
        ];
        // Convert PHP array to JavaScript array
        echo 'var reclamationData = ' . json_encode($reclamationData) . ';';
      ?>
      var labels = reclamationData.map(function(item) {
        return item.day;
      });
      var counts = reclamationData.map(function(item) {
        return item.count;
      });
      // Creating the chart using Chart.js
      var ctx = document.getElementById('reclamationChart').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Reclamation',
            data: counts,
            borderColor: 'rgb(21, 172, 21)',
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Jours'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Nombre de réclamation'
              }
            }
          }
        }
      });
      // ----
      <?php
        $reclamationData2 = [
          ['name' => 'Tanger Tétouan Al Hoceima', 'reclamation' => 55],
          ['name' => 'à lest', 'reclamation' => 1],
          ['name' => 'Fès Meknès', 'reclamation' => 1],
          ['name' => 'Rabat Salé Kenitra', 'reclamation' =>12],
          ['name' => 'Beni Mellal Khenifra', 'reclamation' => 1],
          ['name' => 'Casablanca Settat', 'reclamation' => 1],
          ['name' => 'Marrakech Safi', 'reclamation' => 1],
          ['name' => 'Draa Tafilalet', 'reclamation' => 1],
          ['name' => 'Souss Massa', 'reclamation' => 1],
          ['name' => 'Guelmim Oued Nom', 'reclamation' => 1],
          ['name' => 'Laâyoune Sakia El Hamra', 'reclamation' => 1],
          ['name' => 'Dakhla Oued Ed Dahab', 'reclamation' => 10]
        ];
        echo 'var reclamationData = ' . json_encode($reclamationData2) . ';';
      ?>
      var labels2 = reclamationData.map(function(item) {
        return item.name;
      });
      var counts2 = reclamationData.map(function(item) {
        return item.reclamation;
      });
      var ctx = document.getElementById('reclamationChart2').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels2,
          datasets: [{
            data: counts2,
            backgroundColor: [
              '#D0F0C0',
              '#90EE90',
              '#98FF98',
              '#A7F432',
              '#7CFC00',
              '#8FD400',
              '#32CD32',
              '#299617',
              '#228C22',
              '#138808',
              '#00563F',
              '#005C29'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      }); 
    </script>
</body>
</html>