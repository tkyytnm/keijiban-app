import { rest } from "msw";

export const handlers = [
  rest.get('/api/thread', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 4,
          title: "Sample thread1",
          user_id: 10,
          created_at: "2022-04-04 14:32:39.454",
          username: 'Yamada'
        },
        {
          id: 5,
          title: "Sample thread2",
          user_id: 11,
          created_at: "2022-04-04 14:32:39.454",
          username: 'Tanaka'
        },
      ])
    )
  }),
  rest.get("/api/thread/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id,
        title: "Sample Title",
        user_id: 5,
        created_at: "2022-04-04 14:32:39.454",
      }),
      ctx.delay(150)
    );
  }),
  rest.get("/api/comment/:thread_id", (req, res, ctx) => {
    const { thread_id } = req.params;
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 22,
          body: "Sample comment",
          thread_id,
          user_id: 11,
          comment_num: 0,
          created_at: "2022-04-04 14:32:39.454",
          username: "sample user",
        },
        {
          id: 23,
          body: "Sample comment1",
          thread_id,
          user_id: 12,
          comment_num: 1,
          created_at: "2022-04-04 14:33:39.454",
          username: "sample user1",
        },
      ])
    );
  }),
];
