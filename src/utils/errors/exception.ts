class BaseException extends Error {
  public readonly code: number
  public readonly type: string

  constructor(message: string, code = -1, type: 'SERVER' | 'CLIENT') {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.type = type
    this.code = code
    Error.captureStackTrace(this)
  }
}

export class ClientException extends BaseException {
  constructor(message: string, code: number) {
    super(message, code, 'CLIENT')
  }
}

export class ServerException extends BaseException {
  constructor(message: string, code: number) {
    super(message, code, 'SERVER')
  }
}
