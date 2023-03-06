import { parentPort, workerData } from 'worker_threads';
import counter from './counter.js';

parentPort.postMessage(counter(workerData))