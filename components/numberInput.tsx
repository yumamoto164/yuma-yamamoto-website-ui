import { Input } from "@heroui/input";

/**
 * A React functional component that renders a numeric input field.
 * Only allows numeric input
 *
 * @returns {JSX.Element} An input element of type "number".
 */
export const NumberInput = () => {
  return <Input type="number" />;
};
