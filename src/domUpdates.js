import $ from 'jquery'

export default {

  disableUserInputButton () {
    console.log('disableUserInputButton called!')
    $('#players-name__submit').prop('disabled', true);
  },

  enableUserInputButton () {
    console.log('enableUserInputButton called!')
    $('#players-name__submit').prop('disabled', false);
  }
}
