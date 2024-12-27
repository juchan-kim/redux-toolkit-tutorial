import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'Learning redux toolkit', content: "i've heard a good things."},
    {id: '2', title: 'Slices...', content: 'The more i say slice, the more i want pizza.' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                        
                    }
                }
            }
        }
    }
})

export const { postAdded } = postsSlice.actions

export const selectAllPosts = (state) => state.posts 

export default postsSlice.reducer