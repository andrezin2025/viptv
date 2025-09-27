<?php
// Função para obter o IP real do visitante
function getUserIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

// Captura o IP e a data/hora atual
$ip = getUserIP();
$date = date("Y-m-d H:i:s");

// Caminho do arquivo de log
$logFile = 'ip_access_log.txt';

// Gera a entrada de log
$logEntry = "[$date] - IP: $ip\n";

// Salva a entrada de log no arquivo
file_put_contents($logFile, $logEntry, FILE_APPEND);

// Opcional: Mostrar mensagem de acesso registrado
echo "Seu acesso foi registrado com sucesso!";
?>
