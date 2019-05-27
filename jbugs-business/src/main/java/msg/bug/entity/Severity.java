package msg.bug.entity;

import javax.persistence.Enumerated;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public enum Severity {
    CRITICAL{
        @Override
        public String toString() {
            return "critical";
        }
    },
    HIGH{
        @Override
        public String toString() {
            return "high";
        }
    },
    MEDIUM{
        @Override
        public String toString() {
            return "medium";
        }
    },
    LOW{
        @Override
        public String toString() {
            return "low";
        }
    }
}
