package internal

import com.kms.katalon.core.configuration.RunConfiguration
import com.kms.katalon.core.main.TestCaseMain


/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */
public class GlobalVariable {
     
    /**
     * <p></p>
     */
    public static Object ShipmentNumber
     
    /**
     * <p></p>
     */
    public static Object UniqueNumber
     
    /**
     * <p></p>
     */
    public static Object DriverAPK
     
    /**
     * <p></p>
     */
    public static Object MobileHeight
     
    /**
     * <p></p>
     */
    public static Object MobileWidth
     

    static {
        try {
            def selectedVariables = TestCaseMain.getGlobalVariables("default")
			selectedVariables += TestCaseMain.getGlobalVariables(RunConfiguration.getExecutionProfile())
            selectedVariables += RunConfiguration.getOverridingParameters()
    
            ShipmentNumber = selectedVariables['ShipmentNumber']
            UniqueNumber = selectedVariables['UniqueNumber']
            DriverAPK = selectedVariables['DriverAPK']
            MobileHeight = selectedVariables['MobileHeight']
            MobileWidth = selectedVariables['MobileWidth']
            
        } catch (Exception e) {
            TestCaseMain.logGlobalVariableError(e)
        }
    }
}
