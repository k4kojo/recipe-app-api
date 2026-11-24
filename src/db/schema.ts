import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export type Favorites = {
  id: number;
  userId: string;
  recipeId: number;
  title: string;
  image: string | null;
  cookTime: string | null;
  servings: number | null;
  createdAt: Date | null;
};

export const favorites = pgTable('favorites', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  recipeId: integer('recipe_id').notNull(),
  title: text('title').notNull(),
  image: text('image'),
  cookTime: text('cook_time'),
  servings: integer('servings'),
  createdAt: timestamp('created_at').defaultNow(),
});
