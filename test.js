const fullStr = process.env.TEST_ENV;
const printLog = (str, type) => console.log(`${str} - ${type}`;
printLog(fullStr, 'full');
printLog(fullStr.substring(0,1), 'trimmed');
if (!fullStr) printLog('Empty', 'string');
