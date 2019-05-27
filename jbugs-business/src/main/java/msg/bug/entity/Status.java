package msg.bug.entity;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public enum Status {
    NEW {
        @Override
        public String toString() {
            return "new";
        }
    },
    INPROGRESS{
        @Override
        public String toString() {
            return "inprogress";
        }
    },
    FIXED{
        @Override
        public String toString() {
            return "fixed";
        }
    },
    CLOSED{
        @Override
        public String toString() {
            return "closed";
        }
    },
    REJECTED{
        @Override
        public String toString() {
            return "rejected";
        }
    },
    INFONEEDED{
        @Override
        public String toString() {
            return "infoneeded";
        }
    }
}
