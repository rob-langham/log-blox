export const logLevels = {
  trace: 0,
  verbose: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  fatal: 6,
} as const;
export type LogLevel = keyof typeof logLevels;
export const LOG_LEVELS = Object.keys(logLevels) as LogLevel[];

export class Logger {
  private readonly module: string;
  private readonly logLevel: number;

  constructor(logLevel?: LogLevel) {
    this.module = nameOfModuleThatCalledThisFunction();
    this.logLevel =
      logLevels[
        logLevel ??
          (LOG_LEVELS.includes(process.env.LOG_LEVEL as any)
            ? (process.env.LOG_LEVEL! as LogLevel)
            : "info")
      ];

    function nameOfModuleThatCalledThisFunction() {
      const error = new Error();
      const stack = error.stack;
      return stack?.split("at ")[3].split("/")?.pop()?.split(".")[0] ?? "unknown";
    }
  }

  private log(level: LogLevel, message: string, ...args: any[]) {
    if (logLevels[level] >= this.logLevel) {
      console.log(
        `${new Date().toISOString()} - [${level.toUpperCase()}] ${this.module} - ${message}`,
        ...args
      );
    }
  }

  trace(message: string, ...args: any[]) {
    this.log("trace", message, ...args);
  }

  verbose(message: string, ...args: any[]) {
    this.log("verbose", message, ...args);
  }

  debug(message: string, ...args: any[]) {
    this.log("debug", message, ...args);
  }

  info(message: string, ...args: any[]) {
    this.log("info", message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.log("warn", message, ...args);
  }

  error(message: string, ...args: any[]) {
    this.log("error", message, ...args);
  }

  fatal(message: string, ...args: any[]) {
    this.log("fatal", message, ...args);
  }
}
