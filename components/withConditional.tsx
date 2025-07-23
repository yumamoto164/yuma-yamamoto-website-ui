/**
 * Conditionally renders its children based on the `when` prop.
 *
 * @param props.children - The React nodes to render if the condition is met.
 * @param props.when - A boolean that determines whether the children should be rendered.
 * @returns The children if `when` is true; otherwise, returns `false`.
 */
export const WithConditional = ({
  children,
  when,
}: {
  children: React.ReactNode;
  when: boolean;
}) => {
  return when && children;
};
