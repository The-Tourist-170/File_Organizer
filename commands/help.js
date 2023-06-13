function helpFn() {
    console.log(`
        List of all commands:
            tuna tree "DirectoryPath"
            tuna organize "DirectoryPath"
            node help

        # NOTE: The current working directory will be processed if "DirectoryPath" is empty.
    `);
}

module.exports = {
    helpKey: helpFn
};