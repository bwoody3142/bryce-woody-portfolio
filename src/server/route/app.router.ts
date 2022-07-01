import { createRouter } from '../createRouter'

export const appRouter = createRouter()
.query('hello', {
    resolve() {
        return { 
            hello: 'world',
            foo: 'bar',
            numb: 3
        }
    }
})

export type AppRouter = typeof appRouter