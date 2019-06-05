package msg.filters;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

@WebFilter(filterName = "AddHeaderFilter", urlPatterns = {"/*"})
public class ResponseFilter implements Filter {

    private final static Logger log = Logger.getLogger(ResponseFilter.class.getName());

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (response instanceof HttpServletResponse) {
            log.info("Adding headers");
            HttpServletResponse http = (HttpServletResponse) response;
            http.addHeader("Access-Control-Allow-Headers","*");
            http.addHeader("Access-Control-Allow-Origin", "*");
            http.addHeader("Access-Control-Allow-Credentials", "true");
            http.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        }
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }
}