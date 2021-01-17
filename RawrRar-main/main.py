import fangcore

pages = {}

opened = open("HTML/Rawr-main.html", "rb")
pages['home'] = opened.read()
opened.close()
HTTP_server = None
def response_handler(client_obj):

	if client_obj.split_request == []:
		client_obj.set_page(pages['home'])
		client_obj.add_tag(b"Content-Type", b"text/html")
	else:
		if client_obj.split_request[0] == "REINIT":
			HTTP_server.stop_http_server()
			return
		opened = open("HTML/" + client_obj.split_request[0], "rb")
		client_obj.set_page(opened.read())
		opened.close()

HTTP_server = fangcore.HTTPServer()

HTTP_server.start_http_server("192.168.1.18", 80, 1)

HTTP_server.set_response_method(response_handler)
