const { namespaceWrapper } = require('../_koiiNode/koiiNode');
class Submission {
  async task() {
    try {
      const valueCN = '感谢您运行大大委托，欢迎成为我们的一员！';
      const valueEN =
        'Thank you for running the Big Big Task, welcome to join us!';
      console.log(valueCN);
      console.log(valueEN);
    } catch (err) {
      console.log('ERROR IN EXECUTING TASK', err);
      return 'ERROR IN EXECUTING TASK' + err;
    }
  }

  async submitTask(roundNumber) {
    console.log('submitTask called with round', roundNumber);
    try {
      const submitCN = '当前正在运行回合: ' + roundNumber;
      const submitEN = 'The current round is: ' + roundNumber;
      console.log(submitCN);
      console.log(submitEN);
      namespaceWrapper.checkSubmissionAndUpdateRound(
        "Hello BigBig!",
        roundNumber,
      );
    } catch (error) {
      console.log('error in submission round', error);
    }
  }

  async fetchSubmission(round) {
    // No need to implement this function
  }
}
const submission = new Submission();
module.exports = { submission };
