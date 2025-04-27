function browserHistory(browserStateObj, inputCommandsArray) {

    let inputCommandsArrayLength = inputCommandsArray.length;
    const clearedBrowserObj = {
        'Browser Name': browserStateObj['Browser Name'],
        'Open Tabs': [],
        'Recently Closed': [],
        'Browser Logs': [],
    };

    const open = (browStObj, cmd, site) => {
        browStObj['Open Tabs'].push(site);
        logs(browStObj, cmd, site);
    }
    const close = (browStObj, cmd, site) => {
        if (browStObj['Open Tabs'].includes(site)) {
            let idx = browStObj['Open Tabs'].indexOf(site);
            browStObj['Open Tabs'].splice(idx, 1);
            recentlyClosed(browStObj, site);
            logs(browStObj, cmd, site);
        }
    }
    const logs = (browStObj, cmd, site) => {
        let logCmd = `${cmd} ${site}`;
        browStObj['Browser Logs'].push(logCmd);
    }
    const recentlyClosed = (browStObj, site) =>{
        browStObj['Recently Closed'].push(site);
    }

    for (let i = 0; i < inputCommandsArrayLength; i++) {

        let currCommandLine = inputCommandsArray[i];
        let site;
        let command;
        if (currCommandLine.includes('Clear History and Cache')) {
            browserStateObj = JSON.parse(JSON.stringify(clearedBrowserObj));
        } else {
            [command, site] = [...currCommandLine.split(' ')];
            // console.log(command, site)
        }

        switch (command) {
            case 'Open': open(browserStateObj, command, site); break;
            case 'Close': close(browserStateObj, command, site); break;
            default: ; break;
        }
    }
    console.log(browserStateObj['Browser Name'])
    console.log(`Open Tabs: ${browserStateObj['Open Tabs'].join(', ')}`)
    console.log(`Recently Closed: ${browserStateObj['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${browserStateObj['Browser Logs'].join(', ')}`)
    // console.log(clearedBrowserObj)
}

browserHistory(
    {
    "Browser Name":"Google Chrome",
    "Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"
]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])
console.log('-------------------------------------')
browserHistory(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"
]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)
// console.log('-------------------------------------')
// browserHistory(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"
//         ]
//     },
//     ["Clear History and Cache", "Open StackOverFlow", "Close StackOverFlow"])