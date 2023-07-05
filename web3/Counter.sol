// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Counter {
    int256 private s_count;

    constructor() {
        s_count = 0;
    }

    function increase() public {
        s_count += 1;
    }

    function decrease() public {
        s_count -= 1;
    }

    function getCount() public view returns (int256) {
        return s_count;
    }
}
