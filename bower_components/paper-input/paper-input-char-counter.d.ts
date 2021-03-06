/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-input-char-counter.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../paper-styles/typography.d.ts" />
/// <reference path="paper-input-addon-behavior.d.ts" />

/**
 * `<paper-input-char-counter>` is a character counter for use with `<paper-input-container>`. It
 * shows the number of characters entered in the input and the max length if it is specified.
 *
 *     <paper-input-container>
 *       <input maxlength="20">
 *       <paper-input-char-counter></paper-input-char-counter>
 *     </paper-input-container>
 *
 * ### Styling
 *
 * The following mixin is available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-input-char-counter` | Mixin applied to the element | `{}`
 */
interface PaperInputCharCounterElement extends Polymer.Element, Polymer.PaperInputAddonBehavior {
  _charCounterStr: string|null|undefined;

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   *
   * @param state     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update(state: {inputElement?: Element|null, value?: string, invalid: boolean}): void;
}

interface HTMLElementTagNameMap {
  "paper-input-char-counter": PaperInputCharCounterElement;
}
