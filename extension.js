javascript: void (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function run() {
        for (let i = 0; i < 20; i++) {
            window.scrollTo(0, i * 1000);
            await sleep(1000);
        }
        await sleep(1000);
        let a = document.querySelectorAll(".video-feed-item a.video-feed-item-wrapper");
        let list = [];
        a.forEach(item => {
            list.push(item.getAttribute("href"));
        });
        await sleep(1000);
        exportToJsonFile(list)
    }
    function exportToJsonFile(jsonData) {
        let dataStr = JSON.stringify(jsonData);
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        let exportFileDefaultName = 'data.json';
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    run()
})();