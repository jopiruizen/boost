/*
 * Rematch is Redux best practices without the boilerplate.
 * See rematch -> https://rematchjs.org/docs/getting-started/installation
 * Note: In rematch, effects is the place to handle async actions, like making API Calls.
 * Effects will be attached at the store during the call to rematch.init
 */
import { dispatch } from '../..';
 

export async function getNotesList() {
    this.setIsLoading();
}

export async function getNoteDetails() {

}