import Stream from "../stream";
import CODParser from "./cod-parser";

test("Correctly parses bytes", async () => {
    const codParser = new CODParser();

    const byteStream = new Stream(new Uint8Array([
        0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3,
        0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xd3, 0xf3, 0xf6, 0xa5, 0xb9,
        0xbf, 0xb3, 0xbb, 0xa3, 0xf3, 0xf6, 0xb4, 0x9f, 0x99, 0x9b, 0x8e,
        0xc6, 0xf3, 0xf6, 0x94, 0x9b, 0x9b, 0x8e, 0x94, 0x9b, 0x9b,
        0x8e, 0x94, 0x9b, 0x9b, 0x8e, 0xf3, 0xf6, 0xdb, 0x9c, 0xdb,
        0xdb, 0xe0, 0xad, 0x8c, 0x9b, 0x8b, 0x9b, 0x8e, 0xc6, 0xf3, 0xf6,
    ]));

    expect(codParser.parse(byteStream)).toBe(
        "------------------\r\n[GAME]\r\nLager:\r\nleerleerleer\r\n%d%% Steuer:\r\n",
    );
});