const createDateTimeStamp = (string) => {
    const dateData = new Date();
    const year = dateData.getFullYear();
    let month = String(dateData.getMonth() + 1);
    month = (string === 'comment' ? month : month.padStart(2, '0'));
    const day = dateData.getDate();
    // const hours = dateData.getHours();
    // const minutes = dateData.getMinutes();
    // const seconds = dateData.getSeconds();

    const timeFormat = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: (string === 'comment' ? true : false)
    });

    const time = timeFormat.format(dateData);
    // console.log(year, month, day, time);
    switch (string) {
        case 'topic': {
            return {
                date: `${year}-${month}-${day}`,
                time: time
            };
        }
        case 'comment': {
            return {
                date: `${month}/${day}/${year}`,
                time: time
            }
        }

    }
};

export {
    createDateTimeStamp
}