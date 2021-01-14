import fangcore

pages = {}

opened = open("Rawr-main.html", "rb")
pages['home'] = opened.read()
opened.close()
HTTP_server = None
def response_handler(client_obj):

	if client_obj.split_request == []:
		client_obj.set_page(pages['home'])
	else:
		if client_obj.split_request[0] == "REINIT":
			HTTP_server.stop_http_server()
			client_obj.set_page("<a href=\"sserve.cc\">Go Back</a>")
			return
		opened = open(client_obj.split_request[0], "rb")
		client_obj.set_page(opened.read())
		opened.close()

HTTP_server = fangcore.HTTPServer()

HTTP_server.start_http_server("192.168.1.18", 80, 1)

HTTP_server.set_response_method(response_handler)

