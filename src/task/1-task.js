export async function task(roundNumber) {
  try {
    const valueCN = "感谢您运行大大委托，欢迎成为我们的一员！";
    const valueEN = "Welcome to the Big Big Task, thank you for joining us!";
    console.log(valueCN);
    console.log(valueEN);
  } catch (err) {
    console.error("ERROR IN EXECUTING TASK", err);
  }
}
