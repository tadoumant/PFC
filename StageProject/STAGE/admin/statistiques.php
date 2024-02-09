<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistiques</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../style2.css">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://kit.fontawesome.com/0c6c59d6fe.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .statistiques1{
            width: 70%;
            height: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
        }
        .statistiques101{
            padding: 30px;
            background-image: url('../images/headerbg.png');
            background-size: cover;
            height: 100%;
            border-radius: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            
        }
        .statistiques101 canvas{

        }
    </style>
</head>
<body>
    <section class="app2AFF">
        <div class="statistiques1">
            <div class="statistiques101">
                <canvas id="reclamationByDaysChart"></canvas>
            </div>
            <div class="statistiques101">
                <canvas id="reclamationByCompanyChart"></canvas>
            </div>
        </div>
    </section>
    <script>
        // Assuming you have PHP arrays containing the reclamation data
        <?php
          // Example PHP arrays
          $reclamationByDaysData = [
            ['day' => '2023-06-01', 'count' => 10],
            ['day' => '2023-06-02', 'count' => 15],
            ['day' => '2023-06-03', 'count' => 8]
            // Add more data as needed
          ];
    
          $reclamationByCompanyData = [
            ['name' => 'Company A', 'reclamation' => 20],
            ['name' => 'Company B', 'reclamation' => 12],
            ['name' => 'Company C', 'reclamation' => 18]
            // Add more data as needed
          ];
    
          // Convert PHP arrays to JavaScript arrays
          echo 'var reclamationByDaysData = ' . json_encode($reclamationByDaysData) . ';';
          echo 'var reclamationByCompanyData = ' . json_encode($reclamationByCompanyData) . ';';
        ?>
    
        // Extracting the days and counts from the reclamationByDaysData array
        var daysLabels = reclamationByDaysData.map(function(item) {
          return item.day;
        });
    
        var daysCounts = reclamationByDaysData.map(function(item) {
          return item.count;
        });
    
        // Creating the chart for reclamation by days
        var ctxDays = document.getElementById('reclamationByDaysChart').getContext('2d');
        var daysChart = new Chart(ctxDays, {
          type: 'pie',
          data: {
            labels: daysLabels,
            datasets: [{
              data: daysCounts,
              backgroundColor: [
                'rgb(255, 99, 132)',
                // 'rgb(54, 162, 235)',
                // 'rgb(255, 205, 86)',
                // Add more colors as needed
              ],
              borderWidth: 2
            }]
          },
          options: {
            responsive: true
          }
        });
    
        // Extracting the company names and reclamation numbers from the reclamationByCompanyData array
        var companyLabels = reclamationByCompanyData.map(function(item) {
          return item.name;
        });
    
        var companyCounts = reclamationByCompanyData.map(function(item) {
          return item.reclamation;
        });
    
        // Creating the chart for reclamation by company
        var ctxCompany = document.getElementById('reclamationByCompanyChart').getContext('2d');
        var companyChart = new Chart(ctxCompany, {
          type: 'pie',
          data: {
            labels: companyLabels,
            datasets: [{
              data: companyCounts,
              backgroundColor: [
                'rgb(255, 99, 132)',
                // 'rgb(54, 162, 235)',
                // 'rgb(255, 205, 86)',
                // Add more colors as needed
              ],
              borderWidth: 2
            }]
          },
          options: {
            responsive: true
          }
        });
      </script>
</body>
</html>