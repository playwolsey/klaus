const sessionConfig = {
    key: 'klaus:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
}

export default sessionConfig
