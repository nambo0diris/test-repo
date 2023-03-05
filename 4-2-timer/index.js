import { argv } from 'node:process'
import {Timer} from "./Timer.js";

const timer = new Timer(argv[2], argv[3], argv[4])
timer.startTimer()