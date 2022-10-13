
import { ref } from "vue"
export default function protoTypeText(value) {
    const text = ref("");

    function firstLaterCAps() {
        if (!value) {
            return false
        } else {
            value.CharAt(0).toUpperCase() + value.slice(1)
        }
    }

    return {
        text,
        firstLaterCAps
    }
}