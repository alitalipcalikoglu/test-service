import express from 'express'

const encodeOptions = {
  extended: true,
}

export const urlEncode = () => express.urlencoded(encodeOptions)
