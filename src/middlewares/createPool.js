import Pool from 'pg-promise'
import { DATABASE_URL }from '../config/db'

const pool = new Pool(DATABASE_URL)

export default pool
