var cluster = require('cluster');
var os = require('os');

if (cluster.isMaster) {
    //CPU의 갯수만큼 워커 생성
    os.cpus().forEach(function (cpu) {
        cluster.fork();
    });

    //워커가 죽으면,
    cluster.on('exit', function(worker, code, signal) {

        //종료된 클러스터 로그
        console.log('워커 종료 : ' + worker.id);

        if (code == 200) {
            //종료 코드가 200인 경우, 워커 재생성
            cluster.fork();
        }
    });
}
else {
    //워커 로직을 여기에 작성
    console.log('워커 생성 : ' + cluster.worker.id);
}