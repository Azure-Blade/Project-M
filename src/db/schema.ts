import {
  boolean,
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';
import crypto from 'node:crypto';

export const quotes = mysqlTable('quotes', {
  id: int('id').primaryKey().autoincrement(),
  content: text('content'),
  author: varchar('author', { length: 64 }),
});

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  username: varchar('username', { length: 64 }),
  password: varchar('password', { length: 64 }),
  email: varchar('email', { length: 320 }),
  verified: boolean('verified').$default(() => false),
  activationToken: varchar('activationToken', { length: 64 }).$default(() =>
    crypto.randomBytes(32).toString('hex')
  ),
});

export const session = mysqlTable('session', {
  id: int('id').primaryKey().autoincrement(),
  token: varchar('token', { length: 64 }),
  userId: int('userId').references(() => users.id),
  timestamp: timestamp('timestamp', {
    mode: 'date',
    fsp: 6,
  }),
});
