import "@testing-library/jest-dom/extend-expect";
import { matchers, createSerializer } from "jest-stitches";

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());
