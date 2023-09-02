import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreviewImageState {
  image: string
}

export const initialState: PreviewImageState = {
  image: "video-placeholder.jpg",
}

export const previewImageSlice = createSlice({
  name: 'previewImage',
  initialState,
  reducers: {
    addPreviewImage: (state,action: PayloadAction<string>) => {
        state.image = action.payload;
    }
  },
})

export const {addPreviewImage} = previewImageSlice.actions;

export default previewImageSlice.reducer;