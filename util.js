let util = {}
util.types = {
    Videos: ["mp4", "mkv"],
    Archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    Documents: ['docx', 'doc', 'pdf', 'odt', 'ppt', 'xlsx', 'xls', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    Applications: ['exe', 'dmg', 'pkg', 'deb'],
    Images: ['jpg', 'jpeg', 'png', 'gif', 'raw'],
    Audios: ['mp3', 'aac', 'flac', 'ogg', 'wav', 'm4a', 'wma']
}

module.export = util;