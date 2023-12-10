const fullStr = process.env.TEST_ENV;
const lengtha = process.env.TEST_ENV.length;
const printLog = (str, type) => console.log(`${str} - ${type}`);
if (!fullStr) printLog('Empty', 'string')
else {
printLog(fullStr, 'full');
printLog(lengtha, 'length');
printLog(fullStr.substring(0,1), 'trimmed');
printLog(fullStr.substring(0,1).length, 'full');  
}

