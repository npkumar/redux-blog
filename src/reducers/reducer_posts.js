import React from 'react';
const INITIAL_STATE = { all: [], post: null };
import { FETCH_POSTS } from '../actions'

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }
    default: 
    return state;
  }
}