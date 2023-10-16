// 37.223056, 38.922500 coordinates to fireship

type LoggerTYPe = (_label: string, val: any, options?: {
    clear?: boolean,
    type?: "warn" | "error" | "log",
}) => void;

const custom_logger: LoggerTYPe = (_label, val, options) => {
    if (options?.clear) console.clear();

    const _log_type = options?.type ?? "log";

    return console[_log_type](
        `\n \n ========== START ${_label} ========== \n \n`,
        val,
        `\n \n ========== END ${_label} ========== \n \n`
    );
}

export default custom_logger;
