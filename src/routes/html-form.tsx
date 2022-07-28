/**
 * @see https://developer.mozilla.org/en-US/docs/Learn/Forms
 * https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#see_also
 * adm
 * https://vscode.dev/github/ant-design/ant-design-mobile
 *
 * <button type="submit" /> beats <input type="submit" />
 * 1. <input> element only allows plain text in its label
 * 2. <button> element allows full HTML content, allowing more complex, creative button content.
 * 3. <button type="button" />
 * 4. <button type="submit" />
 * 5. <button type="reset" />
 */

const Form = () => {
  return (
    <form
      action="/api/handling-my-form"
      method="post"
      name="my-form"
      target="_blank"
      autoComplete="off">
      <fieldset>
        <legend>Your form</legend>
        <ul>
          <li>
            <label htmlFor="name">Enter your name: </label>
            <input
              type="text"
              name="text"
              defaultValue="default-name-value"
              id="text"
              placeholder="text"
              autoComplete="text"
            />
          </li>
          <li>
            <label htmlFor="email">Enter your email: </label>
            <input
              type="email"
              name="email"
              defaultValue="default@email.value"
              id="email"
              placeholder="email"
              autoComplete="email"
            />
          </li>
          <li>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              defaultValue="default-message"
              id="message"
              cols={30}
              rows={10}></textarea>
          </li>
          <li>
            <label>
              Radio
              <input type="radio" name="radio" />
            </label>
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default Form;
