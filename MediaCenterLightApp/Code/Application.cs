using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.MediaCenter;
using Microsoft.MediaCenter.Hosting;
using Microsoft.MediaCenter.UI;
using LightApp;

namespace MediaCenterLightApp
{
    public class Application : ModelItem
    {
        private AddInHost host;
        private HistoryOrientedPageSession session;

        private InpOut io = new InpOut();


        public Application()
            : this(null, null)
        {
        }

        public Application(HistoryOrientedPageSession session, AddInHost host)
        {
            this.session = session;
            this.host = host;
        }

        public MediaCenterEnvironment MediaCenterEnvironment
        {
            get
            {
                if (host == null) return null;
                return host.MediaCenterEnvironment;
            }
        }

        public void GoToMenu()
        {
            Dictionary<string, object> properties = new Dictionary<string, object>();
            properties["Application"] = this;

            if (session != null)
            {
                session.GoToPage("resx://MediaCenterLightApp/MediaCenterLightApp.Resources/Menu", properties);
            }
            else
            {
                Debug.WriteLine("GoToMenu");
            }
        }

        public void DialogTest(string strClickedText)
        {


            //int timeout = 0;
            //bool modal = true;
            string caption = Resources.DialogCaption;

            if (session != null)
            {
                if (strClickedText == "Ligar Relê")
                    io.PortWriteUshort(255);
                else if (strClickedText == "Desligar Relê")
                    io.PortWriteUshort(0);

                /*MediaCenterEnvironment.Dialog(strClickedText,
                                              caption,
                                              new object[] { DialogButtons.Ok },
                                              timeout,
                                              modal,
                                              null,
                                              delegate(DialogResult dialogResult) { });*/
            }
            else
            {
                Debug.WriteLine("DialogTest");
            }
        }

        public string[] MyData
        {
            get
            {
                return new string[2] { "Ligar Relê", "Desligar Relê" };
            }
        }
    }
}