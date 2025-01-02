import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function audit(submission, roundNumber, submitterKey) {
  console.log(`AUDIT SUBMISSION FOR ROUND ${roundNumber} from ${submitterKey}`);
  if (submission !== "Hello BigBig!") {
    console.log("AUDIT FAILED: INVALID SUBMISSION");
    return false;
  }
  return true;
}
