class MinMax {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "test",
            "name": "Min Max Blocks",
            "blocks": [
                        {
                            "opcode": "min",
                            "blockType": "reporter",
                            "text": "[num1] min [num2]",
                            "arguments": {
                                "num1": {
                                    "type": "number",
                                    "defaultValue": "0"
                                },
                                "num2": {
                                    "type": "number",
                                    "defaultValue": "0"
                                },
                            }
                        },
                        {
                            "opcode": "max",
                            "blockType": "reporter",
                            "text": "[num1] max [num2]",
                            "arguments": {
                                "num1": {
                                    "type": "number",
                                    "defaultValue": "0"
                                },
                                "num2": {
                                    "type": "number",
                                    "defaultValue": "0"
                                },
                            }
                        },
                ],
        };
    }
    
    min({num1,num2}) {
        return Math.min(num1, num2)
    }
    
    max({num1,num2}) {
        return Math.max(num1, num2)
    }
}

Scratch.extensions.register(new MinMax())
