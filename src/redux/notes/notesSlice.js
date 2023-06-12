import { createSlice, getType } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: "deneme",
                title: "deneme",
                color: "primary",
                item: "dlolr lorem ipsum",
                fullDate: "1.1.1"
            },
            {
                id: "deneme3",
                title: "lorem ipsum 3",
                color: "danger",
                item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula velit, consequat eu neque non, placerat sodales velit.",
                fullDate: "1.1.1"
            }
        ],
        filteredNotes: [
            {
                id: "deneme",
                title: "deneme",
                color: "primary",
                item: "dlolr lorem ipsum",
                fullDate: "1.1.1"
            },
            {
                id: "deneme3",
                title: "lorem ipsum 3",
                color: "danger",
                item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vitae elit in tempor. Nullam vel dui sed magna vulputate.",
                fullDate: "1.1.1"
            },
        ],
        editNote: [],
        editIndex: 0,
        editTitle: "",
        editItem: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
            state.filteredNotes = state.items;
        },
        editNote: (state, action) => {
            const id = action.payload;
            state.editIndex = state.items.findIndex(item => item.id === id);
            state.editNote = state.filteredNotes[state.editIndex];
        },
        changeEditNote: (state, action,) => {
            if (action.payload.editItem === "") {
                state.editItem = state.filteredNotes[state.editIndex].item
            } else {
                state.editItem = action.payload.editItem;
            }

            if (action.payload.editTitle === "") {
                state.editTitle = state.filteredNotes[state.editIndex].title
            } else{
                state.editTitle = action.payload.editTitle
            }

            state.filteredNotes[state.editIndex].title = state.editTitle;
            state.filteredNotes[state.editIndex].item = state.editItem;

            state.editNote = [];
            state.editIndex = 0;
            state.editTitle = "";
            state.editItem = "";
        },
        deleteNote: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items.splice(index, 1);
            state.filteredNotes = state.items;
        },
        filterNote: (state, action) => {
            if (action.payload === "") {
                state.filteredNotes = state.items;
            } else {
                const text = action.payload;
                const filteredItem = state.filteredNotes.filter(item => item.title === text);
                state.filteredNotes = filteredItem
            }

        }
    }
});

export const { editNote, deleteNote, addNote, filterNote, changeEditNote } = notesSlice.actions;
export default notesSlice.reducer;