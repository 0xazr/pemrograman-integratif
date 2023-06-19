<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');
header('Access-Control-Allow-Origin: *');

function sendSSE($event, $data)
{
    echo "event: $event\n";
    echo "data: $data\n\n";
    ob_flush();
    flush();
}

$counter = 0;
while (true) {
    $counter++;
    $message = "This is SSE message #$counter";
    sendSSE('message', $message);
    sleep(1);
}
?>
